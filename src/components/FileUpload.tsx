
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Upload } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const FileUpload = () => {
  const [isDragging, setIsDragging] = useState(false);
  const { toast } = useToast();
  const [hasUploadedFiles, setHasUploadedFiles] = useState(false);

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
    const files = Array.from(e.dataTransfer.files);
    handleFileUpload(files);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      handleFileUpload(files);
    }
  };

  const handleFileUpload = (files: File[]) => {
    // Mock upload success for now
    toast({
      title: "Files uploaded successfully",
      description: `${files.length} file(s) have been uploaded.`
    });
    setHasUploadedFiles(true);
  };

  if (hasUploadedFiles) {
    return null;
  }

  return (
    <Card 
      className={`p-8 border-2 border-dashed transition-colors ${
        isDragging ? 'border-primary bg-primary/10' : 'border-muted-foreground/20'
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <div className="rounded-full bg-primary/10 p-4">
          <Upload className="w-8 h-8 text-primary" />
        </div>
        <div>
          <h3 className="text-lg font-semibold">Upload your files</h3>
          <p className="text-sm text-muted-foreground">Drag and drop your files here or choose an option below</p>
        </div>
        <div className="flex gap-4">
          <div>
            <input
              type="file"
              id="single-file"
              className="hidden"
              onChange={handleFileSelect}
            />
            <Button variant="outline" onClick={() => document.getElementById('single-file')?.click()}>
              Single File
            </Button>
          </div>
          <div>
            <input
              type="file"
              id="bulk-files"
              className="hidden"
              multiple
              onChange={handleFileSelect}
            />
            <Button variant="outline" onClick={() => document.getElementById('bulk-files')?.click()}>
              Multiple Files
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};
