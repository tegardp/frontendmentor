import React from 'react';

const LifeTracking = ({track, addTrack, removeTrack, dateCollection}) => {
    return(
        <React.Fragment>
            <h2 className='font-bold text-xl text-center'>Life Tracking</h2>
            <div className='w-full'>
            <button className='bg-green-500 py-1 px-2 rounded-lg font-bold text-lg my-4' onClick={() => addTrack()}>+</button>
            </div>
          {[...Array(track).keys()].reverse().map((i) => (
            <div>
              <p>Track {i+1}</p>
              <div className='flex'>
                <input type="color" id={`color-track-${track}`}/>
                <label for={`date-from-track-${i}`} >from</label>
                <input id={`date-from-track-${i}`} type="date" value={dateCollection ? dateCollection[i] : null}/>
                <label for={`date-to-track-${i}`} >to</label>
                <input id={`date-to-track-${i}`} type="date"/>
                <input id={`description-track-${i}`} placeholder="Description" />
                { track === i && <button onClick={() => removeTrack()}>x</button>}
              </div>
            </div>
          ))}
        </React.Fragment>
    )
}

export default LifeTracking;