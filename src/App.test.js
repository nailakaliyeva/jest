import {add} from "./App";
// test("Fake Test", ()=>{
//     expect(true).toBeTruthy();
// })

test("add", ()=>{
    const value = add(1,2)

    expect(value).toBe(3)
})