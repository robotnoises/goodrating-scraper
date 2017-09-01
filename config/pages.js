const Page = require('./../models/Page');

const teamRecordSelector = {
  name: ['table tbody tr td:nth-child(1)'],
  record: ['table tbody tr td:nth-child(2)'],
  win_percentage: ['table tbody tr td:nth-child(3)'],
  margin_of_victory: ['table tbody tr td:nth-child(4)'],
  ats: ['table tbody tr td:nth-child(5)'],
};

const teamSosSelector = {
  name: ['table tbody tr td:nth-child(2) a'],
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

const teamTalentSelector = {
  name: ['div.name a span'],
  score: ['div.right-content a.number'],
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

// Uncomment to crawl team talent pages

// module.exports = {
//   pages: [
//     new Page(
//       'team_talent1',
//       'http://247sports.com/Season/2017-Football/CollegeTeamTalentComposite?Conference=AAC',
//       teamTalentSelector
//     ),
//     new Page(
//       'team_talent2',
//       'http://247sports.com/Season/2017-Football/CollegeTeamTalentComposite?Conference=ACC',
//       teamTalentSelector
//     ),
//     new Page(
//       'team_talent3',
//       'http://247sports.com/Season/2017-Football/CollegeTeamTalentComposite?Conference=Big-12',
//       teamTalentSelector
//     ),
//     new Page(
//       'team_talent4',
//       'http://247sports.com/Season/2017-Football/CollegeTeamTalentComposite?Conference=Big-Ten',
//       teamTalentSelector
//     ),
//     new Page(
//       'team_talent5',
//       'http://247sports.com/Season/2017-Football/CollegeTeamTalentComposite?Conference=C-USA',
//       teamTalentSelector
//     ),
//     new Page(
//       'team_talent6',
//       'http://247sports.com/Season/2017-Football/CollegeTeamTalentComposite?Conference=IND',
//       teamTalentSelector
//     ),
//     new Page(
//       'team_talent7',
//       'http://247sports.com/Season/2017-Football/CollegeTeamTalentComposite?Conference=MAC',
//       teamTalentSelector
//     ),
//     new Page(
//       'team_talent8',
//       'http://247sports.com/Season/2017-Football/CollegeTeamTalentComposite?Conference=M-West',
//       teamTalentSelector
//     ),
//     new Page(
//       'team_talent9',
//       'http://247sports.com/Season/2017-Football/CollegeTeamTalentComposite?Conference=Pac-12',
//       teamTalentSelector
//     ),
//     new Page(
//       'team_talent10',
//       'http://247sports.com/Season/2017-Football/CollegeTeamTalentComposite?Conference=SBC',
//       teamTalentSelector
//     ),
//     new Page(
//       'team_talent11',
//       'http://247sports.com/Season/2017-Football/CollegeTeamTalentComposite?Conference=SEC',
//       teamTalentSelector
//     )
//   ],
// };
