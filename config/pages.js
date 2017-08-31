const Page = require('./../models/Page');

const totalOffenseSelector = {
  name: ['td[data-stat="school_name"] a'],
  numplays_total: ['td[data-stat="tot_plays"]'],
  numyards_total: ['td[data-stat="tot_yds"]'],
};

module.exports = {
  pages: [
    new Page(
      'total_offense',
      'https://www.sports-reference.com/cfb/years/2017-team-offense.html',
      totalOffenseSelector
    )
  ],
};
