import { Card } from '@/components/ui/card';

interface File {
  id: string;
  name: string;
  status: 'processing' | 'ready' | 'error';
  uploadedAt: string;
  url?: string;
}

interface FileListProps {
  onFileSelect?: (file: File | null) => void;
}

const mockFiles: File[] = [
  { 
    id: '1', 
    name: 'Assignment 1.pdf', 
    status: 'ready', 
    uploadedAt: '2025-04-27',
    url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
  },
  { 
    id: '2', 
    name: 'Notes.docx', 
    status: 'processing', 
    uploadedAt: '2025-04-27'
  },
];

export const FileList = ({ onFileSelect }: FileListProps) => {
  return (
    <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2">
      {mockFiles.map((file) => (
        <Card 
          key={file.id} 
          className="file-card"
          onClick={() => onFileSelect?.(file)}
        >
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-medium">{file.name}</h3>
              <p className="text-sm text-muted-foreground">{file.uploadedAt}</p>
            </div>
            <span className={`px-2 py-1 rounded-full text-xs ${
              file.status === 'ready' ? 'bg-green-100 text-green-700' :
              file.status === 'processing' ? 'bg-yellow-100 text-yellow-700' :
              'bg-red-100 text-red-700'
            }`}>
              {file.status}
            </span>
          </div>
        </Card>
      ))}
    </div>
  );
};
