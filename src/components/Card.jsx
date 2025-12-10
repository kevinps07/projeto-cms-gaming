function Card ({title, content, height='', width=''}){

    let _className = '';

    if(height && width){
     _className = `h-${height} w-${width} `
    }

    _className = 'flex-1 '
    let className = "overflow-hidden rounded-lg bg-white shadow col-auto";

    return (
            <div className={_className + className}>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                <p className="mt-2 text-sm text-gray-600">
                  {content}
                </p>
              </div>
            </div>
    );
}


export default Card;