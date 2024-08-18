export default function Skills() {
    const list=[
        "Learn new Recipes",
        "Experiment with food",
        "write your own recipes",
        "Know nutrition facts",
        "get cooking tips",
        "Get ranked"
    ]

    return (
        <div className="section skills">
            <div className="col1 img">
                <img src="/img/gallery/img_10.jpg" alt="" />

            </div>
            <div className="col1 typography">
                <h1 className="title">Improve your Culinary Skills</h1>
                { list.map((item,index)=>(
                    <p className="skill-item" key={index}>{item}</p>
                ))}
                <button className="btn">Signup now</button>

            </div>
        </div>
    )
}