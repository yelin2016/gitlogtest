import {values} from 'mobx'
import {types, getParent, flow} from 'mobx-state-tree'

export const Good = types.model('Good', {
    id: types.identifier(),
    name: types.string,
    price: types.number,
})

export const Goods = types
    .model('Goods', {
        isLoading: true,
        goods: types.map(Good)
    })
    .views(self => ({

    }))
    .actions(self => ({
        getGoods() {
            self.isLoading =true;
            setTimeout(()=>{
                var goodsData = [
                    {
                        "name":"玉米",
                        "price":25,
                        "id":1,
                    },
                    {
                        "name":"小麦",
                        "price":30,
                        "id":2,
                    },
                    {
                        "name":"花生",
                        "price":50,
                        "id":3,
                    }
                ];
                self.goods = goodsData;
                self.isLoading = false;
            },3000)

        }
    }))
