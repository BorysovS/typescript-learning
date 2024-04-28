/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface Proops {
  title: string;
}

class Component<T extends Proops> {
  constructor(public props: T) {}
}

class Page extends Component<Proops> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
