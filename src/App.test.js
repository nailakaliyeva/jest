import { total} from "./App";
// test("Fake Test", ()=>{
//     expect(true).toBeTruthy();
// })

const add = jest.fn(()=>3)
test("add", ()=>{
    const value = add(1,2)
    expect(value).toBe(3)
    expect(add).toHaveBeenCalledTimes(1)
    expect(add).toHaveBeenCalledWith(1,2)

})
// test("total", ()=>{
//     expect (total(5,20)).toBe("$25")
// })