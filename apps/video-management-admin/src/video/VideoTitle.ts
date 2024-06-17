import { Video as TVideo } from "../api/video/Video";

export const VIDEO_TITLE_FIELD = "objectName";

export const VideoTitle = (record: TVideo): string => {
  return record.objectName?.toString() || String(record.id);
};
