use web_sys::console;
use yew::{function_component, html};

#[function_component(HelloWorld)]
fn hello_world() -> Html {
    html! { "Hello, Rust!" }
}

fn main() {
    console::log_1(&"Hello, Rust!".into());
    yew::start_app::<HelloWorld>();
}
