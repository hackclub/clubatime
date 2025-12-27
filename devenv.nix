{
  pkgs,
  lib,
  config,
  inputs,
  ...
}:

{
  # https://devenv.sh/packages/
  packages = [ pkgs.git ];

  # https://devenv.sh/languages/
  languages.javascript = {
    enable = true;
    package = pkgs.nodejs_24;
    corepack.enable = true;
    pnpm.install.enable = true;
  };

  languages.typescript.enable = true;

  languages.nix.enable = true;

  # https://devenv.sh/services/
  services.postgres = {
    enable = true;
    listen_addresses = "localhost";
    initialDatabases = [
      # for the love of all things security, please do not expose this default database.
      {
        name = "clubatime";
        user = "clubatime";
        pass = "clubatime";
        schema = ./drizzle;
      }
    ];
  };

  # See full reference at https://devenv.sh/reference/options/
}
