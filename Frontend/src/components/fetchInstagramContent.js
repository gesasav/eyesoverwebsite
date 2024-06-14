export const fetchInstagramMedia = async (accessToken) => {
  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${accessToken}&limit=6`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data && data.data) {
      return data.data.map(media => ({
        id: media.id,
        title: media.caption || 'Instagram Image',
        smallImage: media.media_type === 'VIDEO' ? media.thumbnail_url : media.media_url,
        permalink: media.permalink
      }));
    } else {
      throw new Error('Failed to fetch Instagram media');
    }
  } catch (error) {
    console.error('Error fetching Instagram media:', error);
    throw error;
  }
};
