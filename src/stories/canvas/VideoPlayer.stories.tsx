import type { Meta, StoryObj } from '@storybook/react';
import { UniformComposition } from '@uniformdev/canvas-react';
import VideoPlayer, { Props as VideoPlayerProps } from '@/canvas/VideoPlayer';
import { createFakeCompositionData } from '../utils';

const meta: Meta<typeof VideoPlayer> = {
  title: 'VideoPlayer',
  component: VideoPlayer,
};

export default meta;
type Story = StoryObj<typeof VideoPlayer>;

const renderStory = (args: VideoPlayerProps) => {
  const fakeComposition = createFakeCompositionData('videoPlayer', args, {});
  return (
    <UniformComposition data={fakeComposition}>
      <VideoPlayer {...args} />
    </UniformComposition>
  );
};

export const YouTube: Story = {
  args: {
    title: 'YouTube video',
    description: 'This is a sample video from YouTube',
    id: 'a2KL5o-_xuk',
    source: 'YouTube'
  },
  render: renderStory,
};

export const Loom: Story = {
  args: {
    title: 'Loom video',
    description: 'This is a sample video from Loom',
    id: '9edb010ba5344833b48ef281380cedaa',
    source: 'Loom'
  },
  render: renderStory,
};
