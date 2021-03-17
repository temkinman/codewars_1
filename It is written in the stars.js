/*
Were you ever interested in the phenomena of astrology, star signs, tarot, voodoo ? (ok not voodoo that's too spooky)...
Task:
Your job for today is to finish the starSign function by finding the astrological sign, given the birth details as a Date object.
Start and end dates for zodiac signs vary on different resources so we will use this table to get consistent results:

Aquarius ------ 21 January - 19 February
Pisces --------- 20 February - 20 March
Aries ---------- 21 March - 20 April
Taurus -------- 21 April - 21 May
Gemini -------- 22 May - 21 June
Cancer -------- 22 June - 22 July
Leo ------------- 23 July - 23 August
Virgo ----------- 24 August - 23 September
Libra ----------- 24 September - 23 October
Scorpio -------- 24 October - 22 November
Sagittarius ---- 23 November - 21 December
Capricorn ----- 22 December - 20 January
*/

function starSign(date) {
    const zodiacs = [
        'Aquarius', 'Pisces', 'Aries',
        'Taurus', 'Gemini', 'Cancer',
        'Leo', 'Virgo', 'Libra',
        'Scorpio', 'Sagittarius', 'Capricorn'
    ]

    const day = date.getDate();
    const month = date.getMonth();
    switch (month) {
        case 0: return day >= 21 ? zodiacs[month] : zodiacs[zodiacs.length - 1];
        case 1: return day >= 20 ? zodiacs[month] : zodiacs[month - 1];
        case 2: return day >= 21 ? zodiacs[month] : zodiacs[month - 1];
        case 3: return day >= 21 ? zodiacs[month] : zodiacs[month - 1];
        case 4: return day >= 22 ? zodiacs[month] : zodiacs[month - 1];
        case 5: return day >= 22 ? zodiacs[month] : zodiacs[month - 1];
        case 6: return day >= 23 ? zodiacs[month] : zodiacs[month - 1];
        case 7: return day >= 24 ? zodiacs[month] : zodiacs[month - 1];
        case 8: return day >= 24 ? zodiacs[month] : zodiacs[month - 1];
        case 9: return day >= 24 ? zodiacs[month] : zodiacs[month - 1];
        case 10: return day >= 23 ? zodiacs[month] : zodiacs[month - 1];
        case 11: return day >= 22 ? zodiacs[month] : zodiacs[month - 1];
    }
    return 'Invalid data';
  }


  let date_1 = new Date(1970, 5, 5); // 'Gemini'
  let date_2 = new Date(2000, 1, 15) // 'Aquarius'
  let date_3 = new Date(1987, 7, 23) // 'Leo'
    
  console.log(starSign(date_1));
  console.log(starSign(date_2));
  console.log(starSign(date_3));