export const CAMPUS_SHIFTS = [
  {
    id: 'morning',
    name: 'Morning',
    startTimes: ['07:00'],
    endTime: '12:00',
    timeLabel: '7:00 AM–12:00 PM',
    description: 'Morning teaching shift.',
  },
  {
    id: 'afternoon',
    name: 'Afternoon',
    startTimes: ['12:00', '13:00'],
    endTime: '17:00',
    timeLabel: '12:00 PM or 1:00 PM–5:00 PM',
    description: 'Afternoon teaching shift with two possible start times.',
  },
  {
    id: 'night',
    name: 'Night',
    startTimes: ['17:30'],
    endTime: '20:30',
    timeLabel: '5:30 PM–8:30 PM',
    description: 'Evening teaching shift.',
  },
]
