const movie = (id, title, year, group, runtimeMinutes, note = '', syncKey = '') => ({ id, title, year, type: 'Movie', group, runtimeMinutes, note, syncKey });
const series = (id, title, year, group, runtimeMinutes, note = '', syncKey = '') => ({ id, title, year, type: 'Series', group, runtimeMinutes, note, syncKey });

const must = [
  movie('iron-man', 'Iron Man', 2008, 'Phase One', 126),
  movie('incredible-hulk', 'The Incredible Hulk', 2008, 'Phase One', 112),
  movie('iron-man-2', 'Iron Man 2', 2010, 'Phase One', 124),
  movie('thor', 'Thor', 2011, 'Phase One', 114),
  movie('captain-america-tfa', 'Captain America: The First Avenger', 2011, 'Phase One', 124),
  movie('avengers', 'The Avengers', 2012, 'Phase One', 143),

  movie('iron-man-3', 'Iron Man 3', 2013, 'Phase Two', 130),
  movie('thor-dark-world', 'Thor: The Dark World', 2013, 'Phase Two', 112),
  movie('winter-soldier', 'Captain America: The Winter Soldier', 2014, 'Phase Two', 136),
  movie('guardians-1', 'Guardians of the Galaxy', 2014, 'Phase Two', 121),
  movie('age-of-ultron', 'Avengers: Age of Ultron', 2015, 'Phase Two', 141),
  movie('ant-man', 'Ant-Man', 2015, 'Phase Two', 117),

  movie('civil-war', 'Captain America: Civil War', 2016, 'Phase Three', 147),
  movie('doctor-strange', 'Doctor Strange', 2016, 'Phase Three', 115),
  movie('guardians-2', 'Guardians of the Galaxy Vol. 2', 2017, 'Phase Three', 136),
  movie('homecoming', 'Spider-Man: Homecoming', 2017, 'Phase Three', 133, 'SYNC: spidey-homecoming', 'spidey-homecoming'),
  movie('ragnarok', 'Thor: Ragnarok', 2017, 'Phase Three', 130),
  movie('black-panther', 'Black Panther', 2018, 'Phase Three', 134),
  movie('infinity-war', 'Avengers: Infinity War', 2018, 'Phase Three', 149),
  movie('ant-man-wasp', 'Ant-Man and the Wasp', 2018, 'Phase Three', 118),
  movie('captain-marvel', 'Captain Marvel', 2019, 'Phase Three', 123),
  movie('endgame', 'Avengers: Endgame', 2019, 'Phase Three', 181),
  movie('far-from-home', 'Spider-Man: Far From Home', 2019, 'Phase Three', 129, 'SYNC: spidey-ffh', 'spidey-ffh'),

  movie('black-widow', 'Black Widow', 2021, 'Phase Four', 134),
  movie('shang-chi', 'Shang-Chi and the Legend of the Ten Rings', 2021, 'Phase Four', 132),
  movie('eternals', 'Eternals', 2021, 'Phase Four', 157),
  movie('no-way-home', 'Spider-Man: No Way Home', 2021, 'Phase Four', 148, 'SYNC: spidey-nwh', 'spidey-nwh'),
  movie('multiverse-madness', 'Doctor Strange in the Multiverse of Madness', 2022, 'Phase Four', 126),
  movie('love-thunder', 'Thor: Love and Thunder', 2022, 'Phase Four', 119),
  movie('wakanda-forever', 'Black Panther: Wakanda Forever', 2022, 'Phase Four', 161),

  movie('quantumania', 'Ant-Man and the Wasp: Quantumania', 2023, 'Phase Five', 125),
  movie('guardians-3', 'Guardians of the Galaxy Vol. 3', 2023, 'Phase Five', 150),
  movie('marvels', 'The Marvels', 2023, 'Phase Five', 105),
  movie('deadpool-wolverine', 'Deadpool & Wolverine', 2024, 'Phase Five', 128, 'SYNC: deadpool-wolverine', 'deadpool-wolverine'),
  movie('brave-new-world', 'Captain America: Brave New World', 2025, 'Phase Five', 118),
  movie('thunderbolts', 'Thunderbolts*', 2025, 'Phase Five', 127),

  movie('fantastic-four-first-steps', 'The Fantastic Four: First Steps', 2025, 'Phase Six', 115),
  movie('spider-man-brand-new-day', 'Spider-Man: Brand New Day', 2026, 'Phase Six', 130, 'SYNC: spidey-bnd', 'spidey-bnd'),

  movie('fantastic-four-2005', 'Fantastic Four', 2005, 'Fantastic Four Movies', 106),
  movie('silver-surfer', 'Fantastic Four: Rise of the Silver Surfer', 2007, 'Fantastic Four Movies', 92),
  movie('fantastic-four-2015', 'Fantastic Four', 2015, 'Fantastic Four Movies', 100, 'Separate 2015 adaptation'),

  movie('x-men-2000', 'X-Men', 2000, 'X-Men Movies', 104),
  movie('x2-2003', 'X2: X-Men United', 2003, 'X-Men Movies', 133),
  movie('x-men-last-stand', 'X-Men: The Last Stand', 2006, 'X-Men Movies', 104),
  movie('x-men-origins-wolverine', 'X-Men Origins: Wolverine', 2009, 'X-Men Movies', 107),
  movie('x-men-first-class', 'X-Men: First Class', 2011, 'X-Men Movies', 132),
  movie('the-wolverine', 'The Wolverine', 2013, 'X-Men Movies', 126),
  movie('x-men-days-of-future-past', 'X-Men: Days of Future Past', 2014, 'X-Men Movies', 132),
  movie('deadpool-2016', 'Deadpool', 2016, 'X-Men Movies', 108),
  movie('x-men-apocalypse', 'X-Men: Apocalypse', 2016, 'X-Men Movies', 144),
  movie('logan-2017', 'Logan', 2017, 'X-Men Movies', 137),
  movie('deadpool-2', 'Deadpool 2', 2018, 'X-Men Movies', 119),
  movie('dark-phoenix', 'Dark Phoenix', 2019, 'X-Men Movies', 113),
  movie('new-mutants', 'The New Mutants', 2020, 'X-Men Movies', 94),
  movie('deadpool-wolverine-2025', 'Deadpool & Wolverine', 2025, 'X-Men Movies', 128, 'Duplicate, syncKey with the Must entry', 'deadpool-wolverine'),

  movie('spider-man-2002', 'Spider-Man', 2002, 'Other Spider-Man Movies', 121),
  movie('spider-man-2', 'Spider-Man 2', 2004, 'Other Spider-Man Movies', 127),
  movie('spider-man-3', 'Spider-Man 3', 2007, 'Other Spider-Man Movies', 139),
  movie('amazing-spider-man', 'The Amazing Spider-Man', 2012, 'Other Spider-Man Movies', 136),
  movie('amazing-spider-man-2', 'The Amazing Spider-Man 2', 2014, 'Other Spider-Man Movies', 142),
  movie('homecoming-duplicate', 'Spider-Man: Homecoming', 2017, 'Other Spider-Man Movies', 133, 'Duplicate, syncKey with the Must entry', 'spidey-homecoming'),
  movie('far-from-home-duplicate', 'Spider-Man: Far From Home', 2019, 'Other Spider-Man Movies', 129, 'Duplicate, syncKey with the Must entry', 'spidey-ffh'),
  movie('no-way-home-duplicate', 'Spider-Man: No Way Home', 2021, 'Other Spider-Man Movies', 148, 'Duplicate, syncKey with the Must entry', 'spidey-nwh'),
  movie('brand-new-day-duplicate', 'Spider-Man: Brand New Day', 2026, 'Other Spider-Man Movies', 130, 'Duplicate, syncKey with the Must entry', 'spidey-bnd'),

  movie('into-spider-verse', 'Spider-Man: Into the Spider-Verse', 2018, 'Spider-Verse', 117),
  movie('across-spider-verse', 'Spider-Man: Across the Spider-Verse', 2023, 'Spider-Verse', 140),

  movie('guardians-holiday-special', 'The Guardians of the Galaxy Holiday Special', 2022, 'Special Presentations', 45),
  movie('werewolf-by-night', 'Werewolf by Night', 2022, 'Special Presentations', 53),

  series('loki', 'Loki', 2021, 'Must TV Shows', 600, '2 seasons'),
  series('wandavision', 'WandaVision', 2021, 'Must TV Shows', 360, '1 season'),
  series('moon-knight', 'Moon Knight', 2022, 'Must TV Shows', 300, '1 season'),
  series('what-if', 'What If...?', 2021, 'Must TV Shows', 720, '3 seasons'),
  series('marvel-zombies', 'Marvel Zombies', 2025, 'Must TV Shows', 120, '4 episodes total'),
  series('falcon-winter-soldier', 'The Falcon and the Winter Soldier', 2021, 'Must TV Shows', 300, '1 season'),
  series('agatha', 'Agatha All Along', 2024, 'Must TV Shows', 420, '1 season'),
  series('secret-invasion', 'Secret Invasion', 2023, 'Must TV Shows', 330, '1 season')
].map((item, order) => ({ ...item, category: 'must', order }));

const extraTitles = [
  series('gifted', "The Gifted", 2017, 'X-Men TV Shows', 900),
  series('legion', 'Legion', 2017, 'X-Men TV Shows', 1080),
  series("x-men-97", "X-Men '97", 2024, 'X-Men TV Shows', 300),

  series('daredevil', 'Daredevil', 2015, 'Defenders Saga', 2340, '3 seasons, 2015-2018'),
  series('jessica-jones', 'Jessica Jones', 2015, 'Defenders Saga', 2340, '3 seasons, 2015-2019'),
  series('luke-cage', 'Luke Cage', 2016, 'Defenders Saga', 1800, '2 seasons, 2016-2018'),
  series('iron-fist', 'Iron Fist', 2017, 'Defenders Saga', 1800, '2 seasons, 2017-2018'),
  series('the-defenders', 'The Defenders', 2017, 'Defenders Saga', 540, '1 miniseries, 2017'),
  series('the-punisher', 'The Punisher', 2017, 'Defenders Saga', 1560, '2 seasons, 2017-2019'),

  series('daredevil-born-again-s1', 'Daredevil: Born Again', 2025, 'After the Defenders', 540, 'Season 1'),
  series('daredevil-born-again-s2', 'Daredevil: Born Again', 2025, 'After the Defenders', 540, 'Season 2'),
  series('punisher-one-last-kill', 'The Punisher: One Last Kill', 2026, 'After the Defenders', 180),

  series('inhumans', "Marvel's Inhumans", 2017, 'Balance Series', 420, '1 season'),
  series('agents-shield', 'Agents of S.H.I.E.L.D.', 2013, 'Balance Series', 7560, '7 seasons'),
  series('agent-carter', 'Agent Carter', 2015, 'Balance Series', 960, '2 seasons'),
  series('runaways', 'Marvel\'s Runaways', 2017, 'Balance Series', 1620, '3 seasons'),
  series('cloak-dagger', 'Marvel\'s Cloak & Dagger', 2018, 'Balance Series', 1200, '2 seasons'),
  series('helstrom', 'Helstrom', 2020, 'Balance Series', 420, '1 season'),

  movie('daredevil-2003', 'Daredevil', 2003, 'Movies to Watch', 103),
  movie('elektra-2005', 'Elektra', 2005, 'Movies to Watch', 97),

  movie('venom-2018', 'Venom', 2018, 'Sony Venom Universe', 112),
  movie('venom-2', 'Venom: Let There Be Carnage', 2021, 'Sony Venom Universe', 97),
  movie('venom-last-dance', 'Venom: The Last Dance', 2024, 'Sony Venom Universe', 109),
  movie('morbius', 'Morbius', 2022, 'Sony Venom Universe', 104),
  movie('madame-web', 'Madame Web', 2024, 'Sony Venom Universe', 116),
  movie('kraven', 'Kraven the Hunter', 2024, 'Sony Venom Universe', 127),

  movie('ghost-rider-2007', 'Ghost Rider', 2007, 'Ghost Rider Movies', 110),
  movie('ghost-rider-2', 'Ghost Rider: Spirit of Vengeance', 2011, 'Ghost Rider Movies', 96),

  movie('blade-1998', 'Blade', 1998, 'Blade Movies', 120),
  movie('blade-2', 'Blade II', 2002, 'Blade Movies', 117),
  movie('blade-trinity', 'Blade: Trinity', 2004, 'Blade Movies', 113),

  series('ms-marvel', 'Ms. Marvel', 2022, 'TV Series', 360),
  series('ironheart', 'Ironheart', 2025, 'TV Series', 300),
  series('hawkeye', 'Hawkeye', 2021, 'TV Series', 300),
  series('i-am-groot', 'I Am Groot', 2022, 'TV Series', 240),
  series('echo', 'Echo', 2024, 'TV Series', 300),
  series('eyes-of-wakanda', 'Eyes of Wakanda', 2025, 'TV Series', 180),
  series('friendly-neighborhood-spider-man', 'Your Friendly Neighborhood Spider-Man', 2025, 'TV Series', 300, '1 season'),
  series('she-hulk', 'She-Hulk: Attorney at Law', 2022, 'TV Series', 420),
  series('wonder-man', 'Wonder Man', 2025, 'TV Series', 300)
].map((item, order) => ({ ...item, category: 'extra', order }));

export const watchlist = [...must, ...extraTitles];
export const mustWatch = watchlist.filter((item) => item.category === 'must');
export const extras = watchlist.filter((item) => item.category === 'extra');
export const groups = (items) => [...new Set(items.map((item) => item.group))];
