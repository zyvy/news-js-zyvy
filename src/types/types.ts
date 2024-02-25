export interface Source {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export interface Article {
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    author: string;
    publishedAt: string;
    source: {
        id: string;
        name: string;
    };
    content?: string;
}

export interface DrawData {
    articles: Article[];
    sources: Source[];
}
