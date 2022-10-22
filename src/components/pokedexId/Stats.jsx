import React from "react";
import "./styles/stats.css";

const Stats = ({ pokemon }) => {
  return (
    <article className="stats-container">
      <section className="skills_div">
        <h3 className="skills_title">Skills</h3>
        <ul className="skills_list">
          {pokemon?.abilities.map((skill) => (
            <li key={skill.slot} className="skills_items">
              {skill.ability.name}
            </li>
          ))}
        </ul>
      </section>

      <section className="stats_info-container">
        <h3 className="stats_title">Stats</h3>
        <ul className="stats_list">
          {pokemon?.stats.map((stat, i) => (
            <li key={i} className="stats_items">
              <div className="stats_items-titles">
                <span className="stats_span-title">{stat.stat.name}</span>
                <span className="stats_span-base">{`${stat.base_stat}/150`}</span>
              </div>
              <span className="stats_span-percent">
                <div
                  className={`stats_div bg-${pokemon?.types[0].type.name}`}
                  style={{ width: `${(100 * stat.base_stat) / 150}%` }}
                ></div>
              </span>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Stats;
