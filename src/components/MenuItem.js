import React from 'react';

// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ id, title, description, imageName, price }) => {
    return (
        <div class="d-flex col-lg-4 mt-4 px-0">
            <article className="card mx-3 border border-0 col px-0">
                <div className="row g-0">
                    <div className="picture col-2">
                        <img className="img-fluid rounded" src={process.env.PUBLIC_URL + "/images/" + imageName}
                            alt={title}></img>
                    </div>
                    <div className="card-body col-10 py-0">
                        <h3 className="card-title">{title}</h3>
                        <p className="card-text">{description}</p>
                        <p className="card-text d-flex justify-content-between">
                            <small className="price">${price}</small>
                            <Button url="" value="Add"/>
                        </p>
                    </div>
                </div>
            </article>
        </div>
    );
};

function Button({ url, value }) {
    return <a href={url} className="btn btn-light btn-sm border rounded">{value}</a>;
}

export default MenuItem;
