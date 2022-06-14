// union types
// intersection types

declare function isTrue(b: boolean): boolean
declare function isTrue(b: boolean): b is boolean
// declare function allTrue(b0,b1,b2: boolean): b0 is boolean, b1 is boolean, b2 is boolean

const f0: (x:number) => number = function(x) { return x+1 }
const f1 = function(x: number) { return x+1 }

type N1 = 0|1
type N2 = 100|1000
type N3 = N1 & N2
type N3a = never
type N3b = {}
type N3c = number & string

type A = "A0" | "A1"
type B = A | 0 | 1
type C = B & {x: number}

type S = {
    y: number;
    z: number;
}

type S1 = S & {x: number}

enum E {
    "E0",
    "E1",
    "E2",
    "E3",
    E4
}

type EC = E & {x:number}

type X = string | number
type Y = string & number
type Z1 = X & Y
type Z2 = X | Y

function f(a: A): null | undefined {
    return null
}

function p(b: B): number {
    if (b == "A0") {
        return -1;
    } else {
        return 1;
    }
}

function q(c: C): number | string {
    // return null     // strictNullChecks: true
    return 0
}

function r(s: S1): void {
    console.log(`(x,y,z) => (${s.x},${s.y},${s.z})`)
}


function r2(s: S): any {

}

function r3(s: S): void | any {

}

function en(e:E): void {
}

function enc(ec:EC): void {
}

function main(args: string[]) : number {

    let c: C
    // c = B::"A0" & {x:1}

    console.log("in main")
    f("A1")
    p("A0");
    q("A0" as C)
    q({x:1} as C)
    r({x: 0, y: 1, z: 2})
    en(E.E1)
    en(E.E4)
    enc({x:1} as EC)
    enc(E.E4 as EC)
    return 0
}

main(["a", "b", "c", "d"])



