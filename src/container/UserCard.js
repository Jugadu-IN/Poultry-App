import u1 from "../assets/u1.PNG";
import u2 from "../assets/u2.PNG";
import u3 from "../assets/u3.PNG";
import u4 from "../assets/u4.PNG";
import u5 from "../assets/u5.PNG";
import u6 from "../assets/u6.PNG";


const UserCard = {
    users:[
        {
            id:"1",
            header:"Farmer",
            title:"The poultry farming apps assists farmer in quite many ways possible. It facilitates the rearing process by awareness creation, dissemination, sharing knowledge and experience. We provide farmer the essential options like his farm status, Inventory, FCR calculations, Market Indicators,broiler rate, egg rates, Dealers and traders contact info, Postings, Shop and easy marketing. ",
           image:`${u1}`
           
        }, {
            id:"2",
            header:"Dealer",
            title:"Even though it depicts that the engagement of dealers seems minor they play a significant role in the poultry farming rate business. Using Poultry App, we create a smooth communication and transaction between farmer and the dealer, hence benefiting both. The dealer view has many perks which includes advertising the product and updating the prices,egg rates app he could analyse his product clicks and views, detailed description about his product which includes the real time images, dynamic price calculation for delivery distance.",
            image:`${u2}`

        }, {
            id:"3",
            header:"Supervisor",
            title:"Inspecting the progress and the process for rearing from time to time is always crucial in Poultry farming rate which is the supervisor daily routine. We make it simple his daily tasks in his view by adopting essential skill set related options like he could add, check and delete the list of farmers with their farms and inventories, after supervisor adds a farmer a request is sent to the farmer and can be seen in his notifications. While in the liftings the farm will be automatically inserted in the liftings when the bird age is greater than 30 days, to the inserted farms lifting vans can be added, every vehicle has a summary of loaded boxes, birds count, average weight and contact details of the driver with edit options. ",
            image:`${u3}`

        }, 
         {
            id:"4",
            header:"Chicken Center Owner",
            title:"The Chicken Centre Owner is the next big role after rearing, marketing and trading. He is the one who enacts the business between the poultry and the end consumer. The App could assist him by ordering the birds through it. The delivery of the birds could be alerted, and he has the chicken driver live location for easy facilitation. He can see the daily market prices and trade through the App. He’s provided with every transaction detail from the past trading.",
            image:`${u4}`

        }, 
        {
            id:"5",
            header:"Driver",
            title:"Delivering of live and healthy birds depend on the drivers these days as a small amount of delay leave us in stress and loss. The driver view of things will be simple and easy to follow such as the navigation to the farmer is created for smooth guided way, smart navigation route is generated for chicken centre and history of lifting document can also be viewed.",
            image:`${u5}`

        }, 
        {
            id:"6",
            header:"Trader",
            title:"The real deal in the industry lies within the traders. Rearing birds and trading are two distinct jobs. In trader view, comes the revolutionary options which upgrade the current marketing situations in which the trader can search farms which are ready for marketing (>30 days age), Farms can be viewed through interactive maps and can be sorted(radius, price, average weight and capacity) and Vans can be added to a farm for lifting. The Trader can add his vehicles, he can guide and monitor them closely, live location of the driver can be seen, the driver account is created dynamically when a vehicle is added. ",
            image:`${u6}`

        }, 
         
    ]
}
export default UserCard;