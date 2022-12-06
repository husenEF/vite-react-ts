/** 
 * @params any | object | [] | string | boolean
 * @return String class
 */
export default function classNames(...classes: any): string {
    return classes.filter(Boolean).join(' ');
}
