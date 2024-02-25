import './sources.css';
import { Source } from '../../../types/types';

class Sources {
    draw(data: Array<Source>) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = <HTMLTemplateElement>document.querySelector('#sourceItemTemp');

        data.forEach((item) => {
            const sourceClone = <HTMLElement>sourceItemTemp.content.cloneNode(true);
            if (sourceClone == null) return;
            const sourceCloneItemName = sourceClone.querySelector('.source__item-name');
            const sourceCloneItem = sourceClone.querySelector('.source__item');
            if (sourceCloneItemName == null || sourceCloneItem == null) return;

            sourceCloneItemName.textContent = item.name;
            sourceCloneItem.setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        document.querySelector('.sources')!.append(fragment);
    }
}

export default Sources;
