// import { Article } from '../../types/types';
// import { Source } from '../../types/types';
import { DrawData } from '../../types/types';
import News from './news/news';
import Sources from './sources/sources';
export class AppView {
    protected news: News;
    protected sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: DrawData) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: DrawData) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
