import { prismaClient } from "../src/config/database.js"

const main = async () => {
    await prismaClient.roles.createMany({
        data:[
            {name :"admin"},
            {name: "user"}
        ]
    })
}

main()