#![no_std]
#![feature(lang_items)]

#[lang = "panic_fmt"]
#[no_mangle]
pub fn add(a: i32, b: i32) -> i32 {
    a + b
}