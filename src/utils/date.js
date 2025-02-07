export const formatDate = (date) => {
  const options = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  return new Date(date).toLocaleDateString('tr-TR', options);
};

export const timeAgo = (date) => {
  const seconds = Math.floor((new Date() - new Date(date)) / 1000);
  
  let interval = seconds / 31536000;
  if (interval > 1) return Math.floor(interval) + ' yıl önce';
  
  interval = seconds / 2592000;
  if (interval > 1) return Math.floor(interval) + ' ay önce';
  
  interval = seconds / 86400;
  if (interval > 1) return Math.floor(interval) + ' gün önce';
  
  interval = seconds / 3600;
  if (interval > 1) return Math.floor(interval) + ' saat önce';
  
  interval = seconds / 60;
  if (interval > 1) return Math.floor(interval) + ' dakika önce';
  
  return Math.floor(seconds) + ' saniye önce';
}; 