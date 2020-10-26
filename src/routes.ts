import { Router } from "./deps.ts";
import {
  addSingle,
  deleteSingle,
  getAll,
  getSingle,
  updateSingle,
} from "../src/controllers/digimon.ts";

const router = new Router();

router
  .get("/", (ctx: any) => {
    ctx.response.body = `
****:***:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::.::::::::::::::.:.::.::::::::::::::.:::::::::::::::::::::::::
****:::::::::::::::::::::::::::::::::::::::::::::::::::::..:::::::..:....::.::......:.::::...:::::..:..:..:..::.:::::::..:.:::::
***::::::::::::::::::::::::::::::...:::::.:::..:.:..........::::::.::...:.:.:..:.....::.:.........................:::::::...::::
**:::::I***I:::::::::::::::::::::::::::...:.::...:::....:.:.:::::...:.....:............::......:::......:...:::...:::::::.::..::
*:::::::*I:*:::::::::::::::::::::::::::::**IV......I*:::::::::::::.::..::...:::.::::..:.........::::....::.....::.::::::.:::::::
**::::::IF:*:::::::::::::::::::::::I:............:::*:..*...:.:::...::..:.......:............:..:.....:.::.....:....:::..:::..::
***:*::::V.::::::::::::.........I...............:::...::I..I:::::.::..:................................:.:..:...:::....:::::.:::
*::::*:*:*:*:::::::::.......I...............II:I:II:...:.*...:.*..:..::..................................:.:::::::.:::::::::::::
*:::I:::.:.*::::.:::::...::........*:.:...I*.:I:*IIV:.::***I:I:::.::.::::................................:::::::::::::::::::::::
********::*::*::::::...I.........:**:*III:IIIFVFNF:*I..**::.:*.I*:::::...........................::::..:::::::::::::::.:::::::::
***VF*:****:*::::::::V.........**:*:.::NFFFIIFNNNNF..::*I:*.:.::::::.............:..............:::.::::::::::::::::::::::::::::
***IV***I:::*:::::V..........::.::*NF*FNNFFNNVFFFNNNV:::.I.*..:.....I:.**...................:....:::::::::::::::::::::::::::::::
*******I::****::::...........INFFN*FNNNVNNNNVFFNNVFIFV:II*::*:*..**I:*:.::......................::.:::::::::::::::::::::::::::::
****I***********.............INFFNFNNNVNNFNVNNNNVFNNNNN:..::.:*.::..I....*:........................:::::::::::::::::::::::::::::
*************V:...............:FNNVFNFVFNNINNFVFNNVNNFF*...I*.*II..::..:.I.I:............................:.:...:.....:::::::::::
II********VI:.:....................:I::NNFFFVFFNNFNIFVF:*.:*::::.::..*:II:..:::.:.:....................................:.:.:.:.:
FFFFFFVFV:::.:::....::I*......I...:II:VFNVNIFV:NFNFFF:......:.:*:I:..I:**I..:..................................................:
*IVV*::.:.:...::I:::I*:...:..::::V:..FNI.V*INFIFFFFF:.........:I..::*.*.::*:::..:..............................................:
:::::::::*:...:*::.:I::*I.:*.*I::II.:.:.:VFF*FFNNVFF...:...........*I****...:.....................................:..........*..
:::*I***I*V:*FFV*::.***:I.*:.****I:::*::.:.*I*:NNVFI:................:.:..:::::..::.........:......................:.:.....*....
:::::*V**I*:.NFNIFNV:::*IV*.::FNVNVFIN**:I*FVFNFNFV::...:..:.::.::.::..:::.::...:...............:.....:.................:*.....:
::I***::I*:*:IVFVNFVV.:I**:*...VF*:FVFIVVVVF:NFINNFI........::.....::...............................::........:......:........:*
:V****INF*:*V*V*FINNF:**I*::I:*.IIIFNFNFNVVIFNFFNNFV........:.........................::...:.............:.:.:::......I........:
::*:IV::FNVVNNIFFFF:*IV::*VFN*II..*INNFNFFFNVVFVNNNVI::::::.:::::..:::...:....:.:...::.:........:::..:::::::::::.I..I......I*:*:
I:*NVNV:*V*VNFFFFFVV*:FFFIFFFI*:*N**VVNFNNN**NFIINNF.V:::::::::::::.:.:.:::.::::.::.:::::::::::::::::::::::::::*:.*I.......:.VV*
I::::::I:I**VFFI*NIFF*FVNVV:FNFFVIFFFFFVN*......*VFFNFF:::*::::::::::::::::::::::::::::::::::*:::***********IIFFI*......II*::VVN
**::*II:::..*:IINNFFFFFFVFFNFFFNFVVFF*FF:...........N*NVI*I************.************************IIIIIIIIII*FVVFI.........I..IFFF
****I*:I*:*I**I:*IVINFFFFNVFFNFVFVFIIF...............IVNFIII:IIII**IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIVVVIIIIIFV*FV.......**:F:VFVFFF
*I****I:::I*V*:F:I:**IIVIVFN*IFNVVIF........I:.......***FFFVIVIIVVVIVIVVIIIVVVIII:*IIIIIIIVIVVVVVVVVVVVFFVVV....*.:.:VIFFFFFNNN*
***NNNVNF*NFIII*I**I:I::I*I*::*VF*.........***I:.......:..*NFIIVVVVVVVVVVVVVVVV.....IIIVVVVVVVVVVVVIVVII:*...*:.:..VFVFFFFF::::.
:::FNVFVNIVFFFI*II*I**IIFFF*F:..........:**I:*..........::.....VVVVVVVVIVVVVI......:..*VVVVVVVVVFF*::*I........VVFINFFF:.:VF....
:::FFNFNFFFFNIFI*:I*V*::V:.........:::.I:.*:I*.**..:....:*.V:.:.VVVVVVVV**:*IFFN.IFFVI.:VFF*:*::*V...**.I*.VI*IVV:.:.:VVV..:.::
:::::::*FFNFVI:..........:..........I:..:**.I...::*..:::....II*.....IFNNNNNNNN*VVVVVFVVFVVFFVV:.....**VVVVVV*..:....*VV:.:::::::
:::.:::::..:....::......:V::::..II.I*II::::.I:I..*.*:VV.::..IIVF.:VI:.*...*:.:*II***::.......*I.FIF***..:::::.:VFFVII.::::::IVFF
::::*****:......I::.....:*I::::..::::*:......:::..FVVF*F*:*F..IVFV:V**:FF*::.........:............:::..FFFFFFFFFFF..:::::FFVVFFV
::::::I***I*.I.*:::.I..*I*:.*.I.......*.I*:..*::..*:F*:*I:*:V...*FFIFFFV*FFV::.....:..::...*.:..::**:.VVVFVVVVVI....:IFNNNNNNFI*
:::::::::.**::::::.*NV.I:.I*:*:..:V.:::::..::I.**..FNFVNI**FFV:V...*FNNFFIINFF::::.:I*::.:::::VFVVVVI*:*VNNFF*..:::::::::*VVFFFN
::::::*V:I*VF*IFV*NVFFI:**::.VI::::*.::I.:*.:.I:*:..FNFFFFV*IIV:*FVVIV.INFFFIFFNFI::..FFFFI::VNNFFI:*IIVFFV..:::::::VNNNNFVFNV**
::::FVVFF*NNFFNNNNFFV::I::.I*I::.....:*::VF.FF*::*:..:VNFFNFF***III:II:*V*::IFNFFNNFFF*:.IFNFFFFFFFFFFVI......:.:::*I::..:VFFFFF
:::NNVFVFNNFNFNFVV::*V*F.FNVN:I:::*IV:::.IFFNVIVI.:::..NNFFFNVN*II**IIVIVIV***********IIIV:FVIF*VFIV.....:*VFFFFFFFFFNNNFFFFFFFF
::NFVNFVIN*VFN*NNIIFINVFNNINVNN:.::..........FNN:VVF.....:NFFFNNVF*I:::::*IIIIIV***********:**I*...::::**I:IFNNFNNNNNNF*::IIVFNN
::NVFFNVNFNVNNVNNNVNNIFNFVNFNN**:::IVNN.I.FN*IIINIVNNI:V:...VNNFNFNFNV**::::::::::::::*II*....:FNFFNNNFFFNNNNNF:.......:::::::..
.:NINNVFFFNIFNVNFNVNFVNNNVNVNNF:::IN:*V**NI:V::VFIFNNNFV***I:...:VFFFNNFFFNNNNNNNV:.......:::......::::....:::::::::YRREBRAP*NAI
    `;
  })
  .get("/digimon", async (ctx: any) => {
    ctx.response.body = {
      meta: {
        code: 200,
        status: "ok",
      },
      data: await getAll(),
    };
  })
  .get("/digimon/:name", async (ctx: any) => {
    if (ctx.params?.name) {
      ctx.response.body = {
        meta: {
          code: 200,
          status: "ok",
        },
        data: await getSingle(String(ctx.params.name)),
      };
    }
  })
  .post("/digimon:name", async (ctx: any) => {
    if (ctx.params?.name) {
      ctx.response.body = {
        meta: {
          code: 200,
          status: "ok",
        },
        data: await addSingle(String(ctx.params.name)),
      };
    }
  })
  .put("/digimon/:name", async (ctx: any) => {
    if (ctx.params?.name) {
      ctx.response.body = {
        meta: {
          code: 200,
          status: "ok",
        },
        data: await updateSingle(String(ctx.params.name)),
      };
    }
  })
  .delete("/digimon/:name", async (ctx: any) => {
    if (ctx.params?.name) {
      ctx.response.body = {
        meta: {
          code: 200,
          status: "ok",
        },
        data: await deleteSingle(String(ctx.params.name)),
      };
    }
  });

export default router;
