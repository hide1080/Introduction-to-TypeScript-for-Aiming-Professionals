{
  type Some<T> = {
    tag: "some",
    value: T
  }

  type None = {
    tag: "none",
  }

  type Option<T> = Some<T> | None

  function isSome<T>(opt: Option<T>): opt is Some<T> {
    return opt.tag === "some"
  }
  
  function show<T>(opt: Option<T>): void {
    if (isSome(opt)) {
      console.log(opt.value)
    }
  }

  const some: Option<number> = {
    tag: "some",
    value: 1080
  }
  const none: Option<number> = {
    tag: "none"
  }

  show(some)
  show(none)
}