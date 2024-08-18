import Chefcard from "./chefcard";

export default function Chef(){
    const chiefs=[
        {
        name:"Juan Carlos",
        img:"/img/top-chiefs/img_1.jpg",
        recipesCount:"10",
        cuisine:"Mexican",
        },
        {
            name:"Juan Dose",
            img:"/img/top-chiefs/img_2.jpg",
            recipesCount:"05",
            cuisine:"Japenese", 
        },
        {
            name:"Eric Maria",
        img:"/img/top-chiefs/img_3.jpg",
        recipesCount:"13",
        cuisine:"Italian",
        },
        {
            name:"Chris Brown",
        img:"/img/top-chiefs/img_4.jpg",
        recipesCount:"08",
        cuisine:"American",
        },
        {
            name:"Blake Lively",
        img:"/img/top-chiefs/img_5.jpg",
        recipesCount:"09",
        cuisine:"French",
        },
        {
            name:"Ben Affleck",
        img:"/img/top-chiefs/img_6.jpg",
        recipesCount:"05",
        cuisine:"Indian",
        }
    ]

    return (
        <div className="section chefs">
            <h1 className="title">Our Top Chief's</h1>
            <div className="chef-container">
                {/* <Chefcard/>                
                <Chefcard/>
                <Chefcard/>
                <Chefcard/>
                <Chefcard/>
                <Chefcard/> */}
                {chiefs.map(chief => <Chefcard key={chief.name} chief={chief} />)}

            </div>
            </div>
    )
}