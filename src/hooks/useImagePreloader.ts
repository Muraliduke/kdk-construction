const imageCache: Set<string> = new Set();

export const preloadImages = async (urls: Array<string | undefined | null | string>): Promise<void> => {
    const uniqueUrls = Array.from(new Set(urls.filter(Boolean) as string[]));
    const toLoad = uniqueUrls.filter(u => !imageCache.has(u));
    if (toLoad.length === 0) return;

    const loaders = toLoad.map(url => new Promise<void>((resolve) => {
        const img = new Image();
        img.onload = () => {
            imageCache.add(url);
            resolve();
        };
        img.onerror = () => {
            imageCache.add(url);
            resolve();
        };
        img.src = url;
    }));

    await Promise.all(loaders);
};

export const isImagePreloaded = (url?: string) => !!url && imageCache.has(url);

export default preloadImages;
