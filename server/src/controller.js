import axios from 'axios';
import prisma from './app.js'

export const getFromApi = async (req,res) => {
    await axios.get('https://api.wazirx.com/api/v2/tickers',{
        params: {
          _limit: 10
         }
      }).then(async (response) => {
        const dt = response.data;
        let eachInfo;
        for(let i=0; i<10; i++){
            eachInfo = dt[Object.keys(dt)[i]];
            await prisma.info.create({
                data: {
                    name: eachInfo.name,
                    last: eachInfo.last,
                    buy: eachInfo.buy,
                    sell: eachInfo.sell,
                    volume: eachInfo.volume,
                    base_unit: eachInfo.base_unit,
                }
            })
        }
        res.status(200).json({message: "Created succesfully!"});

    }).catch((err) => {
        console.log(err);
    })
}

export const getPostedData = async (req,res) => {
    try{
        const top10 = await prisma.info?.findMany();
        res.status(201).json(top10);
    }catch(error){
        console.log(error)
    }
}

export const search = async (req, res) => {
    const query = req.query.q;
    try {
      const items = await prisma.info.findMany({
        where: {
          base_unit: {
            contains: query,
            mode: 'insensitive',
          },
        },
        take: 40,
      });
      res.status(200).json(items);
    } catch (err) {
      console.log(err);
    }
  };
