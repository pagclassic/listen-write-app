
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export const FileUpload = () => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    // Handle file upload here
  };

  return (
    <Card className={`p-8 border-2 border-dashed transition-colors ${
      isDragging ? 'border-primary bg-primary/10' : 'border-muted-foreground/20'
    }`}
    onDragOver={handleDragOver}
    onDragLeave={handleDragLeave}
    onDrop={handleDrop}>
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <div className="rounded-full bg-primary/10 p-4">
          <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Upload your files</h3>
          <p className="text-sm text-muted-foreground">Drag and drop your files here or click to browse</p>
        </div>
        <Button variant="outline">Browse Files</Button>
      </div>
    </Card>
  );
};
