//This is an static component for the bloc 'en-continu'
import Articles from "./Articles";
import '../style.css';
import { promises as fs } from 'fs'

async function getData() {
  const fileContents = await fs.readFile(process.cwd() + '/src/data/articles.json', 'utf8');
  const data = JSON.parse(fileContents);
  return data;
}

export default async function Content() {
  const articles = await  getData();
  console.log('articles ', articles);

  return (
    <div className="layout-homepage__top">
      <div className="arcad__wrapper">
        <section className="relative">
          <div className="st_1">
            <div className="st_2">
              <p className="st_3">
                Quand la science s’emmêle : une erreur de conversion et la sonde s’écrase sur Mars
              </p>
              <div className="st_4"></div>
              <p className="st_5">
                Les ingénieurs pensaient lire des mesures dans le langage international alors qu’elles étaient dans le langage anglo-saxon. En 1999, cette méprise a provoqué le crash de la sonde Mars Climate Orbiter, portant un sérieux coup aux ambitions spatiales américaines.
              </p>
              <ul>
                <li>Curabitur blandit tempus porttitor. Cras justo odio</li>
                <li>Morbi leo risus, porta ac consectetur ac, vestibulum at eros ipsum dolor sit amet, consectetur adipiscing elit</li>
              </ul>
            </div>
          </div>
        </section>
        <Articles articles={articles} />
      </div>
    </div>
  );
}
