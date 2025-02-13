import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  var1 = '© 2025, Epic Games, Inc. Todos los derechos reservados. Epic, Epic Games, el logotipo de Epic Games, Fortnite, el logotipo de Fortnite, Unreal, Unreal Engine, el logotipo de Unreal Engine, Unreal Tournament y el logotipo de Unreal Tournament son marcas comerciales o marcas registradas de Epic Games, Inc. tanto en Estados Unidos de América como en el resto del mundo. Otras marcas o nombres de productos son marcas comerciales de sus respectivos propietarios. Nuestros sitios web pueden incluir enlaces a otros sitios y recursos ofrecidos por terceros. Estos enlaces solo se ofrecen para tu mayor comodidad. Epic Games no tiene control sobre el contenido de esos sitios y recursos, y no acepta ninguna responsabilidad por ellos ni por cualquier pérdida o daño que pueda ocasionar el uso que haces de ellos.';
  var2 = {terminos: 'Términos de servicio', politica1: 'Política de privacidad', politica2: 'Política de reembolso de la tienda', 
    listado: 'Listado de editoras'
  }
}
