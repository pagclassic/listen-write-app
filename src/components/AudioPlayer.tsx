
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';

export const AudioPlayer = () => {
  return (
    <div className="audio-player">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Button size="icon" variant="ghost">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Button>
            <Button size="icon">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </Button>
          </div>
          <div className="flex-1 mx-4">
            <Slider defaultValue={[0]} max={100} step={1} />
          </div>
          <div className="text-sm text-muted-foreground">
            0:00 / 0:00
          </div>
        </div>
      </div>
    </div>
  );
};
