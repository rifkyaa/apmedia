import axios from 'axios';

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const CHANNEL_ID = import.meta.env.VITE_YOUTUBE_CHANNEL_ID;

const BASE_URL = 'https://www.googleapis.com/youtube/v3';

const youtubeClient = axios.create({
  baseURL: BASE_URL,
  params: {
    key: API_KEY,
  },
});

export const getChannelStatistics = async () => {
  try {
    const response = await youtubeClient.get('/channels', {
      params: {
        part: 'statistics',
        id: CHANNEL_ID,
      },
    });
    if (response.data.items.length === 0) {
      throw new Error('Channel not found');
    }
    return response.data.items[0].statistics;
  } catch (error) {
    console.error('Error fetching channel statistics:', error);
    throw error;
  }
};

export const getTotalPlaylists = async () => {
  try {
    const response = await youtubeClient.get('/playlists', {
      params: {
        part: 'snippet',
        channelId: CHANNEL_ID,
        maxResults: 50,
      },
    });
    return response.data.pageInfo.totalResults;
  } catch (error) {
    console.error('Error fetching playlists:', error);
    throw error;
  }
};

export const getLatestVideos = async (maxResults = 2) => {
  try {
    const response = await youtubeClient.get('/search', {
      params: {
        part: 'snippet',
        channelId: CHANNEL_ID,
        maxResults: maxResults,
        order: 'date',
        type: 'video',
      },
    });
    if (response.data.items.length === 0) {
      throw new Error('No videos found');
    }
    return response.data.items;
  } catch (error) {
    console.error('Error fetching latest video:', error);
    throw error;
  }
};
