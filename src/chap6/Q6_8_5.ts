{
  type Some<T> = {
    tag: "some",
    value: T
  }

  type None = {
    tag: "none",
  }

  type Option<T> = Some<T> | None

  function mapOption<T, U>(opt: Option<T>, f: (v: T) => U): Option<U> {
    switch (opt.tag) {
      case "some":
        return { tag: "some", value: f(opt.value) }
      case "none":
        return { tag: "none" }
    }
  }

  function doubleOption(obj: Option<number>) {
    return mapOption(obj, x => x * 2)
  }

  const four: Option<number> = { tag: "some", value: 4, }
  const nothing: Option<number> = { tag: "none", }
  console.log(doubleOption(four))
  console.log(doubleOption(nothing))
}