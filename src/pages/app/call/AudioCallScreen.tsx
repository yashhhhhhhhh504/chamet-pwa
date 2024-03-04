import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  AudioCallRedIcon,
  BluetoothIcon,
  HoldIcon,
  MicIcon,
  SpeakerIcon,
} from '@/components/ui/icons/svg-icons';
import { useCallCardStore } from '@/stores/call-card-store';

export function AudioCallScreen() {
  const { toggleAudioCall } = useCallCardStore();

  return (
    <div className="audio-call 2 z-[100] flex h-screen w-full flex-col items-center justify-between bg-primary md:absolute md:bottom-16 md:right-[74px] md:h-[60vh] md:w-[330px] md:rounded-xl">
      <div className="mt-8">
        <p className="text-xl font-medium text-white">Dialing...</p>
      </div>
      <div className="py-4">
        <p className="text-2xl font-semibold text-white">Username</p>
      </div>
      <div className="avatar-container px-14 py-8">
        <Avatar className="h-48 w-48 border-[24px] outline outline-[24px] outline-offset-[24px] outline-secondary/20 ring-[24px] ring-secondary/60 ring-offset-0 md:h-24 md:w-24 md:border-[12px] md:outline-[12px] md:outline-offset-[24px] md:ring-[12px]">
          <AvatarImage src="/images/woman-profile.png" />
        </Avatar>
      </div>
      <div className="action-buttons-I flex w-full items-center justify-between px-8 py-8">
        <div className="action-item flex flex-col items-center gap-2">
          <MicIcon className="h-12 w-12 stroke-white md:h-5 md:w-5" />
          <span className="text-white">Mute</span>
        </div>
        <div className="action-item flex flex-col items-center gap-2">
          <BluetoothIcon className="h-12 w-12 stroke-white md:h-5 md:w-5" />
          <span className="text-white">Bluetooth</span>
        </div>
        <div className="action-item flex flex-col items-center gap-2">
          <HoldIcon className="h-12 w-12 stroke-white md:h-5 md:w-5" />
          <span className="text-white">Hold</span>
        </div>
      </div>
      <div className="action-buttons-II flex w-full items-center justify-end gap-20 px-8 py-16">
        <div className="action-item">
          <Button size="icon" className="bg-white" onClick={toggleAudioCall}>
            <AudioCallRedIcon className="h-12 w-12 md:h-5 md:w-5" />
          </Button>
        </div>
        <div className="action-item">
          <SpeakerIcon className="h-12 w-12 stroke-white md:h-5 md:w-5" />
        </div>
      </div>
    </div>
  );
}
