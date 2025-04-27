
import { FileUpload } from "@/components/FileUpload";
import { FileList } from "@/components/FileList";
import { AudioPlayer } from "@/components/AudioPlayer";

const Index = () => {
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
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Your Files</h2>
          <FileList />
        </div>
      </main>

      <AudioPlayer />
    </div>
  );
};

export default Index;
