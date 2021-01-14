import React from 'react';
import './App.scss';

function App() {
  return (
    [{
      type: 'workout',
      title: 'Lake Inniscarra, Ireland—Pyramid',
      imgThumb: '/images/lake-inniscarra-thumb.jpg',
      imgTrainer: '/images/lake-inniscarra-trainer.jpg',
      worksouts: '',
      statsTime: '30:53',
      statsDistance: '6,248 M',
      viewDetails: 'https://www.ifit.com/treadmills'
     },
     {
      type: 'playlist',
      title: 'Performance Series',
      imgThumb: '/images/performance-series-thumb.jpg',
      imgTrainer: '/images/performance-series-trainer.jpg',
      worksouts: '9',
      statsTime: '',
      statsDistance: '',
      viewDetails: 'https://www.ifit.com/bikes'
     },
     {
      type: 'workout',
      title: 'Slow Pulls and Fast Intervals',
      imgThumb: '/images/slow-pulls-thumb.jpg',
      imgTrainer: '/images/slow-pulls-trainer.jpg',
      worksouts: '',
      statsTime: '44:13',
      statsDistance: '9,948 M',
      viewDetails: 'https://www.ifit.com/ellipticals'
     },
     {
      type: 'playlist',
      title: '20 Minutes to Toned',
      imgThumb: '/images/20-minutes-to-toned-thumb.jpg',
      imgTrainer: '/images/20-minutes-to-toned-trainer.jpg',
      worksouts: '12',
      statsTime: '',
      statsDistance: '',
      viewDetails: 'https://www.ifit.com/apps'
     }
     ,
     {
      type: 'workout',
      title: 'Charles Race, Boston, Massachusetts',
      imgThumb: '/images/charles-race-thumb.jpg',
      imgTrainer: '/images/charles-race-trainer.jpg',
      worksouts: '',
      statsTime: '36:22',
      statsDistance: '8,648 M',
      viewDetails: 'https://www.ifit.com/blog'
     },
     {
      type: 'playlist',
      title: 'Full-Body HIIT Series',
      imgThumb: '/images/full-body-hiit-thumb.jpg',
      imgTrainer: '/images/full-body-hiit-trainer.jpg',
      worksouts: '12',
      statsTime: '',
      statsDistance: '',
      viewDetails: 'https://www.ifit.com/rowers'
     },
     {
      type: 'workout',
      title: 'Kafue River, Zambia—Power Stroke Pyramid',
      imgThumb: '/images/kafue-river-thumb.jpg',
      imgTrainer: '/images/kafue-river-trainer.jpg',
      worksouts: '',
      statsTime: '22:22',
      statsDistance: ' 4,660 M',
      viewDetails: 'https://www.ifit.com/cable-equipment'
     },
     {
      type: 'playlist',
      title: 'Shred & Burn Series',
      imgThumb: '/images/shred-and-burn-thumb.jpg',
      imgTrainer: '/images/shred-and-burn-trainer.jpg',
      worksouts: '16',
      statsTime: '',
      statsDistance: '',
      viewDetails: 'https://www.ifit.com/reflective-equipment'
     }
   ].map( ( {type,title, imgThumb, imgTrainer, worksouts, statsTime, statsDistance, viewDetails} ) => {
        return <div className="card" data-type={type}>
          <div className="card-image" style={{ backgroundImage: `url(${imgThumb})` }}>
            {/* hidden until further notice */}
            <div className="card-playlist">
              <p>
                <strong>{worksouts}</strong>
                Workouts
              </p>
            </div>
          </div>
          <div className="card-text">
            <h2 className="card-title">{title}</h2>
            <img src={imgTrainer} alt={title} className="card-avatar"/>
            <div className="card-stats">
              <span className="card-stats-time">{statsTime}</span>
              <span className="card-stats-distance">{statsDistance}</span>
            </div>
            <a
              className="card-link"
              href={viewDetails}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Details
            </a>
          </div>
        </div>
    })
  );
}

export default App;
