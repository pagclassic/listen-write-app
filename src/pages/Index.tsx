
import { FileUpload } from "@/components/FileUpload";
import { FileList } from "@/components/FileList";
import { AudioPlayer } from "@/components/AudioPlayer";
import { FilePreview } from "@/components/FilePreview";
import { useState } from "react";

const Index = () => {
  const [selectedFile, setSelectedFile] = useState<{
    id: string;
    name: string;
    url?: string;
  } | null>(null);

  return (
    <div className="min-h-screen pb-24">
      <header className="container mx-auto py-8">
        <h1 className="text-4xl font-bold mb-2">HearWrite</h1>
        <p className="text-lg text-muted-foreground">
          Listen to your documents while you write
        </p>
      </header>

      <main className="container mx-auto space-y-8">
        <FileUpload />
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Your Files</h2>
            <FileList onFileSelect={setSelectedFile} />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Preview</h2>
            <div className="h-[600px]">
              <FilePreview file={selectedFile} />
            </div>
          </div>
        </div>
      </main>

      <AudioPlayer />
    </div>
  );
};

export default Index;
