type Potion<A extends {}> = A & {mix<B extends {}>(b: B): Potion<A & B>}

export function Potion<A extends {}>(a: A): Potion<A> {
  return {
    ...a,
    mix<B extends {}>(b: B) {
      return Potion<A & B>({...a, ...b})
    },
  }
}
