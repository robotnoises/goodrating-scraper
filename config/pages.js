const Page = require('./../models/Page');

const teamRecordSelector = {
  name: ['table tbody tr td:nth-child(1)'],
  record: ['table tbody tr td:nth-child(2)'],
  win_percentage: ['table tbody tr td:nth-child(3)'],
  margin_of_victory: ['table tbody tr td:nth-child(4)'],
  ats: ['table tbody tr td:nth-child(5)'],
};

const teamSosSelector = {
  name: ['table tbody tr td:nth-child(2)'],
  sos_rating: ['table tbody tr td:nth-child(3)'],
};

const totalOffenseSelector = {
  name: ['td[data-stat="school_name"] a'],
  numplays_total: ['td[data-stat="tot_plays"]'],
  numyards_total: ['td[data-stat="tot_yds"]'],
};

const totalDefenseSelector = {
  name: ['td[data-stat="school_name"] a'],
  numplays_total: ['td[data-stat="opp_tot_plays"]'],
  numyards_total: ['td[data-stat="opp_tot_yds"]'],
};

module.exports = {
  pages: [
    new Page(
      'team_records',
      'https://www.teamrankings.com/ncf/trends/win_trends/',
      teamRecordSelector
    ),
    new Page(
      'team_sos',
      'https://www.teamrankings.com/college-football/ranking/schedule-strength-by-other',
      teamSosSelector
    ),
    new Page(
      'team_offense',
      'https://www.sports-reference.com/cfb/years/2017-team-offense.html',
      totalOffenseSelector
    ),
    new Page(
      'team_defense',
      'https://www.sports-reference.com/cfb/years/2017-team-defense.html',
      totalDefenseSelector
    )
  ],
};
