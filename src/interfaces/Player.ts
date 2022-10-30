import { ImageRequireSource } from 'react-native';

export interface ITrack {
  id: string;
  title: string;
  artist: string;
  source: string;
  duration: string;
  artwork?: any;
  //last?: boolean;
}
