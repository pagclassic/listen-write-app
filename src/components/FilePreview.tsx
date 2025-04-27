
import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card } from '@/components/ui/card';

// Set worker URL for PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

interface FilePreviewProps {
  file: {
    id: string;
    name: string;
    url?: string;
  } | null;
}

export const FilePreview = ({ file }: FilePreviewProps) => {
  const [numPages, setNumPages] = useState<number>(1);
  const [pageNumber, setPageNumber] = useState<number>(1);

  if (!file?.url) {
    return (
      <Card className="flex items-center justify-center h-full bg-muted/10">
        <p className="text-muted-foreground">Select a file to preview</p>
      </Card>
    );
  }

  const isPDF = file.name.toLowerCase().endsWith('.pdf');
  const isImage = /\.(jpg|jpeg|png|gif|webp)$/i.test(file.name);

  if (isPDF) {
    return (
      <Card className="p-4 h-full overflow-auto">
        <Document
          file={file.url}
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          className="mx-auto"
        >
          <Page 
            pageNumber={pageNumber} 
            className="max-w-full"
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </Document>
        <div className="flex justify-between mt-4">
          <button
            onClick={() => setPageNumber(page => Math.max(page - 1, 1))}
            disabled={pageNumber <= 1}
            className="text-sm text-muted-foreground hover:text-foreground disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-sm">
            Page {pageNumber} of {numPages}
          </span>
          <button
            onClick={() => setPageNumber(page => Math.min(page + 1, numPages))}
            disabled={pageNumber >= numPages}
            className="text-sm text-muted-foreground hover:text-foreground disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </Card>
    );
  }

  if (isImage) {
    return (
      <Card className="p-4 h-full">
        <AspectRatio ratio={4/3} className="bg-muted">
          <img
            src={file.url}
            alt={file.name}
            className="rounded-md object-contain w-full h-full"
          />
        </AspectRatio>
      </Card>
    );
  }

  return (
    <Card className="flex items-center justify-center h-full">
      <p className="text-muted-foreground">Preview not available for this file type</p>
    </Card>
  );
};
