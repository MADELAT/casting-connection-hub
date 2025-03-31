export type UserType = 'actor' | 'producer' | 'agent';

export interface User {
  id: string;
  email: string;
  name: string;
  userType: UserType;
  profileCompleted: boolean;
  isPremium: boolean;
}

export interface ActorProfile {
  id: string;
  userId: string;
  name: string;
  age: number;
  gender: string;
  physicalType: string;
  height: string;
  bodyType: string;
  hairColor: string;
  eyeColor: string;
  profilePicture: string;
  cv: string;
  bio: string;
  clips: VideoClip[];
  castings: CastingSubmission[];
}

export interface VideoClip {
  id: string;
  actorId: string;
  title: string;
  description: string;
  url: string;
  thumbnailUrl: string;
  duration: number; // in seconds
  tags: string[];
  uploadDate: Date;
  downloadCode?: string;
  downloadCodeExpiry?: Date;
  downloadLimit?: number;
  downloadCount?: number;
}

export interface CastingSubmission {
  id: string;
  actorId: string;
  producerId?: string;
  projectName: string;
  roleName: string;
  instructions: string;
  videoUrl: string;
  thumbnailUrl: string;
  submissionDate: Date;
  status: 'pending' | 'viewed' | 'shortlisted' | 'rejected';
  notes?: string;
  downloadCode?: string;
  downloadCodeExpiry?: Date;
  downloadLimit?: number;
  downloadCount?: number;
}

export interface ProducerProfile {
  id: string;
  userId: string;
  companyName: string;
  position: string;
  bio: string;
  projects: Project[];
}

export interface Project {
  id: string;
  producerId: string;
  name: string;
  description: string;
  castingCalls: CastingCall[];
}

export interface CastingCall {
  id: string;
  projectId: string;
  roleName: string;
  description: string;
  requirements: string;
  deadline: Date;
  submissions: CastingSubmission[];
}

export interface SearchFilters {
  ageRange?: [number, number];
  gender?: string;
  physicalType?: string;
  heightRange?: [number, number];
  bodyType?: string;
  hairColor?: string;
  eyeColor?: string;
  tags?: string[];
  searchText?: string; // Added searchText property
}

export interface SubscriptionTier {
  id: string;
  name: string;
  price: number;
  clipLimit: number;
  clipDuration: number; // in seconds
  features: string[];
}

export type NotificationType = 
  | 'new_casting'
  | 'viewed_casting'
  | 'shortlisted'
  | 'rejected'
  | 'new_download'
  | 'expiring_download_code';

export interface Notification {
  id: string;
  userId: string;
  type: NotificationType;
  message: string;
  read: boolean;
  date: Date;
  relatedId?: string; // Could be a castingId, clipId, etc.
}
