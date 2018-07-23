import { types, getParent } from "mobx-state-tree"

export const ViewStore = types
    .model({//描述树的形状  //初始值生成第一次快照
        page: "books",
        selectedBookId: ""
    })
    .views(self => ({
        //带get的是计算属性
        //这里面不带get的方法可以用来过滤
        get shop() {
            console.log('getP',getParent(self));
            return getParent(self)
        },
        get isLoading() {
            return self.shop.isLoading
        },
        get currentUrl() {
            console.log('currentUrl');
            switch (self.page) {
                case "books":
                    return "/"
                case "book":
                    return "/book/" + self.selectedBookId
                case "cart":
                    return "/cart"
                default:
                    return "/404"
            }
        },
        get selectedBook() {
            return self.isLoading || !self.selectedBookId
                ? null
                : self.shop.books.get(self.selectedBookId)
        },
        get testNumber() {
            console.log('testNumber');
            console.log(self.page);
            return self.shop.cart.entries.length;
        }
    }))
    .actions(self => ({
        openBooksPage() {
            console.log('openBooksPage');
            self.page = "books"
            self.selectedBookId = ""
        },
        openBookPage(book) {
            console.log('openBookPage');
            self.page = "book"
            self.selectedBookId = book.id
        },
        openBookPageById(id) {
            console.log('openBookPageById');
            self.page = "book"
            self.selectedBookId = id
        },
        openCartPage() {
            console.log('openCartPage');
            self.page = "cart"
            self.selectedBookId = ""
        },
        openGoodPage() {
            self.page = 'goods';
            self.selectedBookId = '';
        }
    }))
