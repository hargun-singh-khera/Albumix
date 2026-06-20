import React from 'react'

const PlaceholderAlbumCard = () => {
    return (
        <div className="card" aria-hidden="true">
            <svg aria-label="Placeholder" className="bd-placeholder-img card-img-top" height="200" preserveAspectRatio="xMidYMid slice" role="img" width="100%" xmlns="http://www.w3.org/2000/svg"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect></svg>
            <div className="card-body">
                <h5 className="card-title placeholder-glow">
                    <span className="placeholder col-6"></span>
                </h5>
                <p className="card-text placeholder-glow">
                    <span className="placeholder col-7"></span>
                    <span className="placeholder col-4"></span>
                    <span className="placeholder col-8"></span>
                </p>
                <div className="d-flex gap-2">
                    <a className="btn btn-sm btn-primary disabled placeholder col-3" aria-disabled="true"></a>
                    <a className="btn btn-sm btn-warning disabled placeholder col-3" aria-disabled="true"></a>
                    <a className="btn btn-sm btn-danger disabled placeholder col-3" aria-disabled="true"></a>
                </div>
            </div>
        </div>
    )
}

export default PlaceholderAlbumCard