import design from './design';
import development from './development';
import photography from './photography';

const courseData = [...design, ...development, ...photography];


const shuffle = a => {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

shuffle(courseData);

export default courseData;