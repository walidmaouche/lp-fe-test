export default function Articles({articles}) {
  return (
    <div className="en-continu-sidebar-v2 has-gradient lp-font-smoothing lp-mb-07 lp-pl-04">
      <h3 className="en-continu-sidebar-v2__title lp-f-subtitle-02 lp-mb-03">
        En continu
      </h3>
      <div className="en-continu-sidebar-v2__container">
        <div className="en-continu-sidebar-v2__scroll">
          <ul className="en-continu-sidebar-v2__list">
            {articles?.map((article) => (
              <li key={article._id} className="en-continu-sidebar-v2__item">
                <article className="lp-card-article lp-card-article--small lp-card-article--with-date lp-font-smoothing lp-color-text lp-box-sizing">
                  <div className="lp-card-article__content lp-box-sizing">
                    <a
                      className="lp-card-article__link lp-f-subtitle-06"
                      href="/"
                      data-page-type="HP"
                      data-block-name="En_Continu"
                    >
                      <span className="lp-card-article__title-tags">Top chrono</span>
                      {article.headlines.basic}
                      <span className="lp-card-article__date lp-color-text-muted lp-f-ui-06">
                        1 min
                      </span>
                    </a>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
  }